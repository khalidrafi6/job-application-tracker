((nil . ((eval .
               (defun ph-job-tracker/live-server ()
                 (start-process-shell-command "Live Server" "*pjt-live-server*" "live-server --no-browser --no-css-inject")))
         (khalid/project-commands . (ph-job-tracker/live-server))
         (eval .
               (khalid/set-project-command-keybindings)))))
