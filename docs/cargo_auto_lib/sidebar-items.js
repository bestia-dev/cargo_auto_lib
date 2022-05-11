initSidebarItems({"fn":[["auto_cargo_toml_to_md","includes data from Cargo.toml to README.md files: version, authors,… It works for workspaces and for single projects. To avoid out of sync data like version, authors and description in the README.md files, `auto_cargo_toml_to_md` includes this data from Cargo.toml. Run it on every build with cargo auto. It works also with other md files in the project, not only README.md. In the md file write these markers in markdown comments (invisible), don’t copy the numbers 1 and 2:"],["auto_check_micro_xml","I want html pages to be correct microXML when I use them for single page application. Before build or release this function will check for correctness."],["auto_delete_old_js_snippets","deletes old js snippets when working with wasm-pack The old folders for `js snippets` are not automatically deleted on building with `wasm-pack`. This utils do that. The function must be executed in the root project folder where is the Cargo.toml.  "],["auto_lines_of_code","inserts shield badges with lines_of_code into README.rs the parameter Link will be used for shield badge. If empty_string, the git remote repository will be used. Lines of code are not a “perfect” measurement of anything. Anybody can write a very big number of lines of useless code and comments. But for 95% of the cases they are good enough. Most of the developers use some “standard” coding practices and that is quantifiable and comparable."],["auto_md_to_doc_comments","finds rs files with markers and include segments from md files Includes segments of md files into rs files as doc comments. It works with workspaces and single projects. From this doc comments `cargo doc` will generated the documentation and auto-completion. We don’t want to manually copy this segments. We want them to be automatically in sync. We will just run this function before every `cargo doc` with an automation task. The `auto_md_to_doc_comments` function must be executed in the project root folder where is the Cargo.toml file. First it searches all the rs files in src, tests and examples folders. If they contain the markers, than finds the md file and the named segment and include it as doc comments into the rs file. The markers are always in pairs: start and end. So exactly the content in between is changed. The markers are always comments, so they don’t change the code. It works only for files with LF line delimiter. No CR and no CRLF."],["auto_plantuml","process plantuml in current directory finds markers (auto_plantuml start) and (auto_plantuml end) in md files if needed calls the web service and saves the svg file Between markers adds the link to the svg file repo_url like https://github.com/bestia-dev/sey_currency_converter_pwa so the image file link is from the repository and accessible everywhere"],["auto_plantuml_for_path","process plantuml for all md files for test and examples I need to provide the path"],["auto_semver_increment_minor","Increments the minor version in Cargo.toml file."],["auto_semver_increment_patch","Increments the patch version in Cargo.toml file."],["auto_version_from_date","Works for single projects and workspaces. new version as date is written to Cargo.toml and service_worker.js In Cargo.toml writes the version as the date `yyyy.mmdd.HHMM` ex. `2019.1221.2359`. For non-library projects, the semver specification is not really useful. Having the version as the date is just fine for executables and much more human readable. The function must be executed in the root project folder of a single project or workspace where is the Cargo.toml."],["auto_version_from_date_forced","Works for single projects and workspaces. Just like auto_version_from_date(), but force the new version even if no files are changed. For workspaces `release` I want to have the same version in all members. It is slower, but easier to understand when deployed."],["auto_version_increment_semver_or_date","increments the version in Cargo.toml. if the major version is greater than 2000, it is a date version else it is semver and increments the patch part"],["auto_version_increment_semver_or_date_forced","increments the version in Cargo.toml. if the major version is greater than 2000, it is a date version forced is used in workspaces to force all members to have the same date version else it is semver and increments the patch part"],["completion_return_one_or_more_sub_commands","println one, more or all sub_commands"],["exit_if_not_run_in_rust_project_root_directory","check if run in rust project root directory error there must be Cargo.toml and the directory automation_tasks_rs exit with error message if not"],["hash_for_filename",""],["run_shell_command","run one shell command Stops task execution if the command has Exit Status != 0"],["run_shell_commands","run shell commands from a vector of strings. Stops task execution if oe of the commands has Exit Status != 0"]],"mod":[["auto_cargo_toml_mod","functions to get data from Cargo.toml It works for workspaces and for single projects.  "],["auto_cargo_toml_to_md_mod","includes data from Cargo.toml to README.md files: version, authors,… It works for workspaces and for single projects.  "],["auto_check_micro_xml_mod",""],["auto_delete_old_js_snippets_mod","deletes old js snippets when working with wasm-pack"],["auto_helper_functions_mod","various helper functions"],["auto_lines_of_code_mod","inserts shield badges with lines_of_code into README.rs It works for workspaces and for single projects.  "],["auto_md_to_doc_comments_mod","finds rs files with markers and include segments from md files It works for workspaces and for single projects.  "],["auto_plantuml_mod","Find md files. Search for marker (auto_plantuml start) and (auto_plantuml end). This markers around the plantuml code define that we want a svg file. If there are no markers, the plantuml will not be processed."],["auto_semver_mod","semver utilities"],["auto_semver_or_date_mod","it reads the version in Cargo.toml and if the major number is greater than 2000, it is a date-version, else it is semver It works for workspaces and for single projects.  "],["auto_version_from_date_mod","new version as date is written to Cargo.toml and service_worker.js It works for workspaces and for single projects.  "],["utils_mod","various utilities"]],"struct":[["CLEAR_ALL","ansi code for clear all"],["CLEAR_LINE","ansi code for clear line"],["CargoToml",""],["GREEN","ansi code for color"],["RED","ansi code for color"],["RESET","ansi code for reset color"],["UNHIDE_CURSOR","ansi code to unhide cursor"],["YELLOW","ansi code for color"]]});