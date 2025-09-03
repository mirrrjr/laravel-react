import { type Post, type BreadcrumbItem } from '@/types';
import { Form, Head, Link } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { create, destroy, edit } from '@/actions/App/Http/Controllers/PostController';
import { show } from '@/actions/App/Http/Controllers/PostController';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

interface PostsProps {
    allPosts: Post[]
}

export default function Posts({ allPosts }: PostsProps) {
    const truncate = (text: string, limit = 50) =>
        text.length > limit ? text.slice(0, limit) + "…" : text;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="p-4">
                <Link
                    href={create()}
                    className='inline-flex items-center gap-1 rounded-xl px-3 py-1.5 mb-3 border border-blue-200 hover:bg-blue-50 text-blue-700'
                >
                    Create New Post
                </Link>
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
                            {allPosts.map(({ id, title, content }: any) =>

                                <tr className="hover:bg-gray-50" key={id}>

                                    <td className="px-4 py-3 font-semibold text-gray-900">
                                        {id}
                                    </td>
                                    <td className="px-4 py-3 text-gray-900">
                                        {title}
                                    </td>
                                    <td className="px-4 py-3 text-gray-700" title="This is a long content that should be truncated to fifty characters at most so it looks tidy.">
                                        {truncate(content)}
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
