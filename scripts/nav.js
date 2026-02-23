const intTab = document.getElementById('int-tab');
const rejTab = document.getElementById('rej-tab');
const allTab = document.getElementById('all-tab');
const allJobs = document.getElementById('all-jobs');
const noJobs = document.getElementById('no-jobs');

const tabs = [allTab, intTab, rejTab];

function tabFocus(tab) {
    tab.classList.remove('bg-white');
    tab.classList.add('bg-blue-500', 'text-white');
}

function tabUnfocus(tab) {
    tab.classList.remove('bg-blue-500', 'text-white');
    tab.classList.add('bg-white');
}

function tabClick(tab) {

    for (t of tabs) {
        if (t.classList.contains("bg-blue-500")) {
            tabUnfocus(t);
        }
    };

    tabFocus(tab);
    
    if (tab !== allTab){
        allJobs.classList.add('hidden');
        noJobs.classList.remove('hidden');
    } else {
        allJobs.classList.remove('hidden');
        noJobs.classList.add('hidden');
    };
};

intTab.addEventListener("click", () => {
    tabClick(intTab);
});

rejTab.addEventListener("click", () => {
    tabClick(rejTab);
});

allTab.addEventListener("click", () => {
    tabClick(allTab);
});
