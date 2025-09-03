import { type Post, type BreadcrumbItem, User } from '@/types';
import { Form, Head, Link } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { destroy, edit } from '@/actions/App/Http/Controllers/UserController';
import { show } from '@/actions/App/Http/Controllers/PostController';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

interface PostsProps {
    users: User[]
}

export default function Users({ users }: PostsProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="p-4">

                <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-200">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-50 text-left text-gray-600">
                            <tr>
                                <th className="px-4 py-3 font-medium">ID</th>
                                <th className="px-4 py-3 font-medium">Title</th>
                                <th className="px-4 py-3 font-medium">Content</th>
                                <th className="px-4 py-3 font-medium text-center">Show</th>
                                <th className="px-4 py-3 font-medium text-center">Edit</th>
                                <th className="px-4 py-3 font-medium text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {users.map(({ id, name, email }) =>

                                <tr className="hover:bg-gray-50" key={id}>

                                    <td className="px-4 py-3 font-semibold text-gray-900">
                                        {id}
                                    </td>
                                    <td className="px-4 py-3 text-gray-900">
                                        {name}
                                    </td>
                                    <td className="px-4 py-3 text-gray-700" title="This is a long content that should be truncated to fifty characters at most so it looks tidy.">
                                        {email}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <Link className='p-5' href={show(id)}>
                                            👀
                                        </Link>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <Link href={edit(id)} className="inline-flex items-center gap-1 rounded-xl px-3 py-1.5 border border-blue-200 hover:bg-blue-50 text-blue-700">
                                            Edit
                                        </Link>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <Form
                                            action={destroy(id)}
                                            className="space-y-6"
                                        >
                                            <Button
                                                type='submit'
                                                onClick={(e) => {
                                                    if (!confirm("Rostdan o'chirmoqchimisiz?")) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                                className="pointer">
                                                Delete
                                            </Button>
                                        </Form>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>

        </AppLayout>
    );
}
