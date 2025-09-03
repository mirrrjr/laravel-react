<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Closure;

class SetLocale
{
    public function handle(Request $request, Closure $next)
    {
        $locale = session('locale', config('app.locale'));
        if (in_array($locale, ['uz', 'ru', 'en'])) {
            App::setLocale($locale);
        }
        return $next($request);
    }
}
