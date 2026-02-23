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
                    rejCount.innerText = Number(rejCount.innerText) - 1;
                }
                statusBadge[0].innerText = "INTERVIEW";
            } else {
                if (jobElem.classList.contains('int-job')) {
                    jobElem.classList.remove('int-job');
                    intCount.innerText = Number(intCount.innerText) - 1;
                }
                statusBadge[0].innerText = "REJECTED";
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
        tabCount.innerText = allJobs.childElementCount;
    })
}
