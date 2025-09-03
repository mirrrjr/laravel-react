import { type Post, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { index } from '@/actions/App/Http/Controllers/PostController';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Single Post',
        href: '/posts',
    },
];

export default function Posts({ post }: Post) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="p-4">
                <Link
                    href={index()}
                    className='inline-flex items-center gap-1 rounded-xl px-3 py-1.5 mb-3 border border-blue-200 hover:bg-blue-50 text-blue-700'
                >
                    Back
                </Link>
                <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-200 p-5">

                    <div key={post.id}>
                        <h1 className='text-3xl font-bold mb-2'>{post.title}</h1>
                        <p className='text-2xl text-gray-500'>{post.content}</p>
                    </div>

                </div>
            </div>

        </AppLayout>
    );
}
