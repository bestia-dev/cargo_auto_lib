// auto_doc_tidy_html_mod

// region: use statements

use crate::error_mod::ResultWithLibError;

// endregion: use statements

/// The HTML generated by `cargo doc` is ugly and difficult to `git diff`
/// tidy HTML is a HTML checker and formatter installed on most Linuxes.
/// If it is not installed run: `sudo apt install -y tidy`
/// From the bash you can install it inside the podman container like this:
/// `podman exec --user root rust_dev_vscode_cnt apt install -y tidy`
pub fn auto_doc_tidy_html() -> ResultWithLibError<()> {
    // First we check if tidy is installed on the system
    // Run a dummy command and write the std/err output to tidy_warnings.txt.
    // The command `2>` will overwrite the file and not append like `2>>`.
    crate::run_shell_command("tidy xxx 2> docs/tidy_warnings.txt");
    // Check if it contains `command not found`
    let text = std::fs::read_to_string("docs/tidy_warnings.txt")?;
    // don't need this file anymore
    crate::run_shell_command("rm -f docs/tidy_warnings.txt");
    if !text.contains("command not found") {
        // Use tidy HTML to format the docs/*.html files to be human readable and usable for git diff.
        // Options: -m modify file, -q quiet suppress nonessential output, -w wrap at 160, -i indent 2 spaces
        // The warnings and errors are appended to the file docs/tidy_warnings.txt
        crate::run_shell_command(
            r#"find ./docs -name '*.html' -type f -print -exec tidy -mq -w 160 -i 2 '{}' \; >> docs/tidy_warnings.txt 2>&1 "#,
        );
    }
    Ok(())
}