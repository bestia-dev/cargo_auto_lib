// examples/plantuml1.rs

/// cargo run --example plantuml1

fn main() {
    let text = "test";
    let hash = cargo_auto_lib::hash_text(&text);

    println!("{hash}");

    // region: prepare folders and files for this example
    // remove the 'images' folder
    std::fs::remove_dir_all("examples/plantuml/images").unwrap();
    // copy md files from sample_data to examples
    std::fs::copy("sample_data/input1_for_plantuml.md", "examples/plantuml/input1_for_plantuml.md").unwrap();
    std::fs::copy("sample_data/input2_for_plantuml.md", "examples/plantuml/input2_for_plantuml.md").unwrap();
    // endregion: prepare folders and files for this example

    let path = camino::Utf8Path::new("examples/plantuml");
    cargo_auto_lib::auto_plantuml_for_path(path.as_std_path(), "");
}
