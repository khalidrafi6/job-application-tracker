const intBtns = document.getElementsByClassName('int-btn');
const rejBtns = document.getElementsByClassName('rej-btn');

function updateJob (btns, cls, countId) {
    for (let i = 0; i < btns.length; i++) {
        let btn = btns[i];
        btn.addEventListener("click", () => {
            let jobElem = btn.parentNode.parentNode;
            let statusBadge = jobElem.getElementsByClassName('job-status');
            
            if (cls === 'int-job') {
                if (jobElem.classList.contains('rej-job')) {
                    jobElem.classList.remove('rej-job');
                    let newCount = Number(rejCount.innerText) - 1;
                    if (rejTab.classList.contains('bg-blue-500')) {
                        tabCount.innerText = newCount + " of " + totalCount.innerText;
                        jobElem.classList.add('hidden');
                        if (newCount === 0) {
                            noJobs.classList.remove('hidden');
                        }
                    }
                    rejCount.innerText = newCount;
                }
                statusBadge[0].innerHTML = '<span class="text-green-700">INTERVIEW</span>';
            } else {
                if (jobElem.classList.contains('int-job')) {
                    jobElem.classList.remove('int-job');
                    let newCount = Number(intCount.innerText) - 1;
                    if (intTab.classList.contains('bg-blue-500')) {
                        tabCount.innerText = newCount + " of " + totalCount.innerText;
                        jobElem.classList.add('hidden');
                        if (newCount === 0) {
                            noJobs.classList.remove('hidden');
                        }
                    }
                    intCount.innerText = newCount;
                }
                statusBadge[0].innerHTML = '<span class="text-red-700">REJECTED</span>';
            };
            jobElem.classList.add(cls);
            let jobs = document.getElementsByClassName(cls);
            countId.innerText = jobs.length;
        });
    };
}

updateJob(intBtns, 'int-job', intCount);
updateJob(rejBtns, 'rej-job', rejCount);

const trashBtns = document.getElementsByClassName('trash-btn');

for (let i = 0; i < trashBtns.length; i++) {
    let btn = trashBtns[i];
    btn.addEventListener("click", () => {
        let jobElem = btn.parentNode.parentNode;
        jobElem.remove();
        totalCount.innerText = allJobs.childElementCount;
        intCount.innerText = intJobs.length;
        rejCount.innerText = rejJobs.length;
        tabCount.innerText = allJobs.childElementCount;
    })
}
