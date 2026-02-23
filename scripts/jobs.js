const intBtns = document.getElementsByClassName('int-btn');
const rejBtns = document.getElementsByClassName('rej-btn');

const jobStatus = document.getElementById('job-status');

function updateJob (btns, cls, countId) {
    for (let i = 0; i < btns.length; i++) {
        let btn = btns[i];
        btn.addEventListener("click", () => {
            let jobElem = btn.parentNode.parentNode;
            if (cls === 'int-job') {
                if (jobElem.classList.contains('rej-job')) {
                    jobElem.classList.remove('rej-job');
                    rejCount.innerText = Number(rejCount.innerText) - 1;
                }
            } else {
                if (jobElem.classList.contains('int-job')) {
                    jobElem.classList.remove('int-job');
                    intCount.innerText = Number(intCount.innerText) - 1;
                }
            };
            jobElem.classList.add(cls);
            let jobs = document.getElementsByClassName(cls);
            countId.innerText = jobs.length;
        });
    };
}

updateJob(intBtns, 'int-job', intCount);
updateJob(rejBtns, 'rej-job', rejCount);
