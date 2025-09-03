import { type BreadcrumbItem, type SharedData } from '@/types';
import { Form, Head, Link, usePage } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { index, store } from '@/actions/App/Http/Controllers/PostController';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts Create',
        href: '/post',
    },
];
type PageProps = {
    errors: Record<string, string>;
};

export default function PostCreate() {
    const { props } = usePage<PageProps>();
    const { errors } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts Create" />
            <div className="p-4">
                <Link
                    href={index()}
                    className='inline-flex items-center gap-1 rounded-xl px-3 py-1.5 mb-3 border border-blue-200 hover:bg-blue-50 text-blue-700'
                >
                    Back
                </Link>
                <Form
                    action={store()}
                    className="space-y-6"
                >
                    <Label htmlFor="name">Title</Label>
                    <Input
                        type='string'
                        id="name"
                        className="mt-1 block w-full"
                        defaultValue=''
                        name="title"
                        required
                        autoComplete="title"
                        placeholder="Enter title"
                    />
                    {errors.title && (
                        <p className="text-red-600 text-sm mt-1">{errors.title}</p>
                    )}

                    <Label htmlFor="name">Content</Label>
                    <Textarea
                        id="content"
                        className="mt-1 block w-full"
                        defaultValue=''
                        name="content"
                        required
                        autoComplete="content"
                        placeholder="Enter content"
                    />
                    {errors.content && (
                        <p className="text-red-600 text-sm mt-1">{errors.content}</p>
                    )}

                    <Button type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>

        </AppLayout>
    );
}
