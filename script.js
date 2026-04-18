const STORAGE_KEY = 'homepage_links';

const defaults = [
    { id: 'news',   label: 'News',   links: [
        { name: 'Helsingin Sanomat', url: 'https://www.hs.fi' },
        { name: 'YLE Uutiset',       url: 'https://yle.fi/uutiset' },
        { name: 'BBC News',          url: 'https://www.bbc.com/news' },
        { name: 'Hacker News',       url: 'https://news.ycombinator.com' },
    ]},
    { id: 'tech',   label: 'Tech',   links: [
        { name: 'GitHub',        url: 'https://github.com' },
        { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
        { name: 'Lobsters',      url: 'https://lobste.rs' },
        { name: 'The Register',  url: 'https://www.theregister.com' },
    ]},
    { id: 'sports', label: 'Sports', links: [
        { name: 'ESPN',      url: 'https://www.espn.com' },
        { name: 'BBC Sport', url: 'https://www.bbc.com/sport' },
        { name: 'Sport.fi',  url: 'https://www.sport.fi' },
    ]},
    { id: 'blogs',  label: 'Blogs',  links: [
        { name: 'Paul Graham',   url: 'https://paulgraham.com/articles.html' },
        { name: 'Overreacted',   url: 'https://overreacted.io' },
        { name: 'Simon Willison', url: 'https://simonwillison.net' },
    ]},
    { id: 'work',   label: 'Work',   links: [
        { name: 'Gmail',            url: 'https://mail.google.com' },
        { name: 'Google Calendar',  url: 'https://calendar.google.com' },
        { name: 'Slack',            url: 'https://slack.com' },
    ]},
];

function load() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaults;
}

function save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

let selectedId = null;

function render() {
    const data = load();
    if (!selectedId) selectedId = data[0].id;
    buildSidebar(data);
    buildMain(data);
}

function buildSidebar(data) {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';
    data.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'sidebar-item' + (cat.id === selectedId ? ' active' : '');
        btn.innerHTML = `<span class="sidebar-dot dot-${cat.id}"></span>${cat.label}`;
        btn.addEventListener('click', () => {
            selectedId = cat.id;
            render();
        });
        sidebar.appendChild(btn);
    });
}

function buildMain(data) {
    const main = document.getElementById('main');
    main.innerHTML = '';

    const cat = data.find(c => c.id === selectedId);
    if (!cat) return;

    const h2 = document.createElement('h2');
    h2.className = `main-header ${cat.id}`;
    h2.textContent = cat.label;
    main.appendChild(h2);

    const ul = document.createElement('ul');
    cat.links.forEach((link, i) => ul.appendChild(buildLink(link, i, cat, data)));
    main.appendChild(ul);

    const addBtn = document.createElement('button');
    addBtn.className = 'add-btn';
    addBtn.textContent = '+ Add link';
    addBtn.addEventListener('click', () => showAddForm(main, ul, addBtn, cat, data));
    main.appendChild(addBtn);
}

function buildLink(link, index, cat, data) {
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = link.name;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = '×';
    removeBtn.setAttribute('aria-label', `Remove ${link.name}`);
    removeBtn.addEventListener('click', e => {
        e.preventDefault();
        cat.links.splice(index, 1);
        save(data);
        render();
    });

    li.appendChild(a);
    li.appendChild(removeBtn);
    return li;
}

function showAddForm(catDiv, ul, addBtn, cat, data) {
    if (catDiv.querySelector('.add-form')) return;

    const form = document.createElement('div');
    form.className = 'add-form';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';

    const urlInput = document.createElement('input');
    urlInput.type = 'text';
    urlInput.placeholder = 'URL';

    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'confirm-btn';
    confirmBtn.textContent = '✓';

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-btn';
    cancelBtn.textContent = '×';

    function submit() {
        const name = nameInput.value.trim();
        let url = urlInput.value.trim();
        if (!name || !url) return;
        if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
        cat.links.push({ name, url });
        save(data);
        render();
    }

    function cancel() {
        form.remove();
    }

    confirmBtn.addEventListener('click', submit);
    cancelBtn.addEventListener('click', cancel);

    [nameInput, urlInput].forEach(input => {
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter') submit();
            if (e.key === 'Escape') cancel();
        });
    });

    form.appendChild(nameInput);
    form.appendChild(urlInput);
    form.appendChild(confirmBtn);
    form.appendChild(cancelBtn);

    catDiv.insertBefore(form, addBtn);
    nameInput.focus();
}

function exportLinks() {
    const data = load();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'links.json';
    a.click();
    URL.revokeObjectURL(a.href);
}

function importLinks(file) {
    const reader = new FileReader();
    reader.onload = e => {
        try {
            const data = JSON.parse(e.target.result);
            save(data);
            render();
        } catch {
            alert('Invalid JSON file.');
        }
    };
    reader.readAsText(file);
}

function buildToolbar() {
    const toolbar = document.getElementById('toolbar');

    const exportBtn = document.createElement('button');
    exportBtn.className = 'toolbar-btn';
    exportBtn.textContent = 'Export';
    exportBtn.addEventListener('click', exportLinks);

    const importLabel = document.createElement('label');
    importLabel.className = 'toolbar-btn';
    importLabel.textContent = 'Import';

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.style.display = 'none';
    fileInput.addEventListener('change', e => {
        if (e.target.files[0]) importLinks(e.target.files[0]);
        fileInput.value = '';
    });

    importLabel.appendChild(fileInput);
    toolbar.appendChild(exportBtn);
    toolbar.appendChild(importLabel);
}

buildToolbar();
render();
