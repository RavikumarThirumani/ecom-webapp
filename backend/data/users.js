import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin User",
        email: "admin@mail.com",
        password: bcrypt.hashSync('admin',9),
        isAdmin: true
    },
    {
        name: "Admin ex",
        email: "example@mail.com",
        password: bcrypt.hashSync('example',9),

    },
    {
        name: "Admin test",
        email: "test@mail.com",
        password: bcrypt.hashSync('test@123',9),

    },
]

export default users