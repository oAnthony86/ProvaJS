<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ControllerCliente;
use App\Http\Controllers\ControllerTransportadora;
use App\Http\Controllers\ControllerProduto;
use App\Http\Controllers\ControllerPedido;

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

Route::get('/Cliente/{id?}',            [ControllerCliente::class, 'list'])         ->name('api.clientes.list');
Route::post('/Cliente',                 [ControllerCliente::class, 'store'])        ->name('api.clientes.store');
Route::put('/Cliente',                  [ControllerCliente::class, 'update'])       ->name('api.clientes.update');
Route::delete('/Cliente/{id}',          [ControllerCliente::class, 'delete'])       ->name('api.clientes.delete');

Route::get('/Transportadora/{id?}',     [ControllerTransportadora::class, 'list'])  ->name('api.transportadora.list');
Route::post('/Transportadora',          [ControllerTransportadora::class, 'store']) ->name('api.transportadora.store');
Route::put('/Transportadora',            [ControllerTransportadora::class, 'update'])->name('api.transportadora.update');
Route::delete('/Transportadora/{id}',   [ControllerTransportadora::class, 'delete'])->name('api.transportadora.delete');

Route::get('/Produto/{id?}',            [ControllerProduto::class, 'list'])         ->name('api.produto.list');
Route::post('/Produto',                 [ControllerProduto::class, 'store'])        ->name('api.produto.store');
Route::put('/Produto',                  [ControllerProduto::class, 'update'])       ->name('api.produto.update');
Route::delete('/Produto/{id}',          [ControllerProduto::class, 'delete'])       ->name('api.produto.delete');

Route::get('/Pedido/{id?}',             [ControllerPedido::class, 'list'])          ->name('api.pedido.list');
Route::post('/Pedido',                  [ControllerPedido::class, 'store'])         ->name('api.pedido.store');
Route::put('/Pedido',                   [ControllerPedido::class, 'update'])        ->name('api.pedido.update');
Route::delete('/Pedido/{id}',           [ControllerPedido::class, 'delete'])        ->name('api.pedido.delete');
