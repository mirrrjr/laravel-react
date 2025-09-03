<?php

namespace App\Services;

use App\Models\Post;

class PostService
{
    public function create(array $data): Post
    {
        $post = Post::create([
            'title' => $data['title'],
            'content' => $data['content'],
        ]);

        return $post;
    }

    public function update(Post $post, array $data): bool
    {
        return $post->update([
            'title' => $data['title'] ?? $post->title,
            'content' => $data['content'] ?? $post->content,
        ]);
    }
}
