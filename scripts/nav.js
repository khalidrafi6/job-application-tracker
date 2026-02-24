const intTab = document.getElementById('int-tab');
const rejTab = document.getElementById('rej-tab');
const allTab = document.getElementById('all-tab');

const allJobs = document.getElementById('all-jobs');
const allJobsChildren = allJobs.children;

const noJobs = document.getElementById('no-jobs');

const intJobs = document.getElementsByClassName('int-job');
const rejJobs = document.getElementsByClassName('rej-job');

const totalCount = document.getElementById('totalCount');
const intCount = document.getElementById('interviewCount');
const rejCount = document.getElementById('rejectCount');
const tabCount = document.getElementById('tabCount');

const tabs = [allTab, intTab, rejTab];

const counts = [totalCount, intCount, rejCount];

const statusClasses = [null, 'int-job', 'rej-job'];

function tabFocus(tab) {
    tab.classList.remove('bg-white');
    tab.classList.add('bg-blue-500', 'text-white');
}

function tabUnfocus(tab) {
    tab.classList.remove('bg-blue-500', 'text-white');
    tab.classList.add('bg-white');
}

function tabClick(tab, count, statusClass) {

    for (t of tabs) {
        if (t.classList.contains("bg-blue-500")) {
            tabUnfocus(t);
            break;
        }
    };

    tabFocus(tab);

    let numberCount = Number(count.innerText);
    
    if (tab !== allTab){
        if (numberCount == 0) {
            allJobs.classList.add('hidden');
            noJobs.classList.remove('hidden');
        } else {
            for (let j = 0; j < allJobsChildren.length; j++) {
                if (!allJobsChildren[j].classList.contains(statusClass)) {
                    allJobsChildren[j].classList.add('hidden');
                } else {
                    allJobsChildren[j].classList.remove('hidden');
                }
            }
            noJobs.classList.add('hidden');
        }
        
    } else {
        allJobs.classList.remove('hidden');
        for (let j = 0; j < allJobsChildren.length; j++) {
                    allJobsChildren[j].classList.remove('hidden');
        }
        noJobs.classList.add('hidden');
    };

    tabCount.innerText = numberCount;
};

for (let i = 0; i < 3; i++) {
    let tab = tabs[i];
    let count = counts[i];
    let statusClass = statusClasses[i];
    tab.addEventListener("click", () => {
        tabClick(tab, count, statusClass);
    });
}
