import { type Post, type BreadcrumbItem, type SharedData } from '@/types';
import { Form, Head, Link } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { index, update } from '@/actions/App/Http/Controllers/PostController';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts Edit',
        href: '/post',
    },
];

export default function PostEdit({ post }: Post) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts Edit" />
            <div className="p-4">
                <Link
                    href={index()}
                    className='inline-flex items-center gap-1 rounded-xl px-3 py-1.5 mb-3 border border-blue-200 hover:bg-blue-50 text-blue-700'
                >
                    Back
                </Link>
                <Form
                    action={update(post.id)}
                    className="space-y-6"
                >
                    <Label htmlFor="name">Title</Label>
                    <Input
                        type='string'
                        id="name"
                        className="mt-1 block w-full"
                        defaultValue={post.title}
                        name="title"
                        required
                    />

                    <Label htmlFor="name">Content</Label>
                    <Textarea
                        id="content"
                        className="mt-1 block w-full"
                        defaultValue={post.content}
                        name="content"
                        required
                    />

                    <Button type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>

        </AppLayout>
    );
}
