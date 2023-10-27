class Task {
    constructor() {
        this.id, 
        this.nome,
        this.iscomplete = false,
        this.created_at = new Date(),
        this.updated_at = new Date()
     }
}

export { Task }