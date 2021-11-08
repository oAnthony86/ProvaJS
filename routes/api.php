<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

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

Route::post('/register',                [AuthController::class, 'register'])        ->name('api.auth.register');
Route::post('/login',                   [AuthController::class, 'login'])           ->name('api.auth.login');

Route::get('/Cliente/{id?}',            [ControllerCliente::class, 'list'])         ->name('api.clientes.list')->middleware('auth:sanctum');;
Route::post('/Cliente',                 [ControllerCliente::class, 'store'])        ->name('api.clientes.store')->middleware('auth:sanctum');;
Route::put('/Cliente',                  [ControllerCliente::class, 'update'])       ->name('api.clientes.update')->middleware('auth:sanctum');;
Route::delete('/Cliente/{id}',          [ControllerCliente::class, 'delete'])       ->name('api.clientes.delete')->middleware('auth:sanctum');;

Route::get('/Transportadora/{id?}',     [ControllerTransportadora::class, 'list'])  ->name('api.transportadora.list')->middleware('auth:sanctum');;
Route::post('/Transportadora',          [ControllerTransportadora::class, 'store']) ->name('api.transportadora.store')->middleware('auth:sanctum');;
Route::put('/Transportadora',           [ControllerTransportadora::class, 'update'])->name('api.transportadora.update')->middleware('auth:sanctum');;
Route::delete('/Transportadora/{id}',   [ControllerTransportadora::class, 'delete'])->name('api.transportadora.delete')->middleware('auth:sanctum');;

Route::get('/Produto/{id?}',            [ControllerProduto::class, 'list'])         ->name('api.produto.list')->middleware('auth:sanctum');;
Route::post('/Produto',                 [ControllerProduto::class, 'store'])        ->name('api.produto.store')->middleware('auth:sanctum');;
Route::put('/Produto',                  [ControllerProduto::class, 'update'])       ->name('api.produto.update')->middleware('auth:sanctum');;
Route::delete('/Produto/{id}',          [ControllerProduto::class, 'delete'])       ->name('api.produto.delete')->middleware('auth:sanctum');;

Route::get('/Pedido/{id?}',             [ControllerPedido::class, 'list'])          ->name('api.pedido.list')->middleware('auth:sanctum');;
Route::post('/Pedido',                  [ControllerPedido::class, 'store'])         ->name('api.pedido.store')->middleware('auth:sanctum');;
Route::put('/Pedido',                   [ControllerPedido::class, 'update'])        ->name('api.pedido.update')->middleware('auth:sanctum');;
Route::delete('/Pedido/{id}',           [ControllerPedido::class, 'delete'])        ->name('api.pedido.delete')->middleware('auth:sanctum');;
