<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ControllerCliente;
use App\Http\Controllers\ControllerTransportadora;
use App\Http\Controllers\ControllerProduto;

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

Route::get('/cliente/{id?}',        [ControllerCliente::class, 'list'])->name('api.clientes.list');
Route::post('/cliente',             [ControllerCliente::class, 'store'])->name('api.clientes.store');
Route::put('/cliente',              [ControllerCliente::class, 'update'])->name('api.clientes.update');
Route::delete('/cliente',           [ControllerCliente::class, 'delete'])->name('api.clientes.delete');

Route::get('/transportadora/{id?}', [ControllerTransportadora::class, 'list'])->name('api.transportadora.list');
Route::post('/transportadora',      [ControllerTransportadora::class, 'store'])->name('api.transportadora.store');
Route::put('/transportadora',       [ControllerTransportadora::class, 'update'])->name('api.transportadora.update');
Route::delete('/transportadora',    [ControllerTransportadora::class, 'delete'])->name('api.transportadora.delete');

Route::get('/produto/{id?}',        [ControllerProduto::class, 'list'])->name('api.produto.list');
Route::post('/produto',             [ControllerProduto::class, 'store'])->name('api.produto.store');
Route::put('/produto',              [ControllerProduto::class, 'update'])->name('api.produto.update');
Route::delete('/produto',           [ControllerProduto::class, 'delete'])->name('api.produto.delete');
