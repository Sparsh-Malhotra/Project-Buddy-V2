import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { hash } from 'bcrypt'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, username, password, name } = body

    // Check if email already exists
    const existingUser = await prisma.user.findMany({
      where: {
        OR: [
          {
            email,
          },
          {
            username,
          },
        ],
      },
    })
    if (existingUser && existingUser.length > 0) {
      return NextResponse.json(
        {
          user: null,
          message: 'User already exists',
        },
        {
          status: 409,
        }
      )
    }

    // Hash the password
    const hashedPassword = await hash(password, 10)

    // Create New User
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        name,
      },
    })

    const { password: newUserPassword, ...rest } = newUser

    return NextResponse.json(
      { user: rest, message: 'User created successfully' },
      { status: 201 }
    )
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { message: 'Something went wrong!!' },
      { status: 500 }
    )
  }
}
