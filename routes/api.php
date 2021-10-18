<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ControllerCliente;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/cliente/{cliente_id?}', [ClientesController::class, 'list'])->name('api.clientes.list');
Route::post('/cliente',              [ClientesController::class, 'store'])->name('api.clientes.store');
Route::put('/cliente',               [ClientesController::class, 'update'])->name('api.clientes.update');
Route::delete('/cliente',            [ClientesController::class, 'delete'])->name('api.clientes.delete');