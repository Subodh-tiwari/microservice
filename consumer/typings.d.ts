declare module 'typings' {
    namespace Model {
        interface User {
            name : string
            password : string
            created_at ?: Date
            updated_at ?: Date
        }
    }
}
