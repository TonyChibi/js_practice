class Product {
    constructor(name = "unknown", comments = []) {
        if (!name) {
            this.name = "unknown"
        } else { this.name = name; }
        this.comments = comments;
    }
    addComment(comment) {
        this.comments.push(comment);
    }

}