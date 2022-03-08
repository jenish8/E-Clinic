exports.postPath = (req, res, next) => {
    try {
        let path = req.file.path;
        res.status(200)
        .json({
            "file_path": path
        });
    } catch (error) {
        res.status(500)
        .json({"error":error})
    }
}
