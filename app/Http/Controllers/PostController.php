<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::latest()->get();

        return Inertia::render('posts/index',
            ['allPosts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('posts/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|min:3|max:255',
            'content' => 'required|string|min:3|max:10000',
        ]);

        Post::create([
            'title' => $validated['title'],
            'content' => $validated['content'],
        ]);

        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = $this->findById($id);

        return Inertia::render('posts/show', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $post = $this->findById($id);

        return Inertia::render('posts/edit', ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'title' => 'string|min:3|max:255',
            'content' => 'string|min:3|max:1000',
        ]);

        $post = $this->findById($id);

        $post->update([
            'title' => $validated['title'] ?? $post->title,
            'content' => $validated['content'] ?? $post->content,
        ]);

        return redirect()->route('posts.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = $this->findById($id);

        $post->delete();

        return redirect()->route('posts.index');
    }

    public function findById($id)
    {
        return Post::findOrFail($id);
    }
}
