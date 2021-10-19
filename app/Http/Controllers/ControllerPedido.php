<?php

namespace App\Http\Controllers;
use App\Models\Cliente;
use Illuminate\Http\Request;

class ControllerCliente extends Controller
{
    public function __construct() {

    }

    public function index() {

    }

    public function create() {

    }

    public function edit() {

    }

    public function show() {

    }

    public function store(Request $request) {
        $pedido = Pedido::store([
            'ClienteId' => $request->ClienteId,
            'TransportadoraId' => $request->TransportadoraId,
            'DataEmissao' => $request->DataEmissao,
            'DataEntrega' => $request->DataEntrega,
            'ValorTotal' => $request->ValorTotal,
        ])
    }

    public function update(Request $request) {
        $pedido = Pedido::where('id', $request->id)->update([
            'datanascimento' => $request->datanascimento,
            'DataEmissao' => $request->DataEmissao,
            'DataEntrega' => $request->DataEntrega,
            'ValorTotal' => $request->ValorTotal,
        ])
    }

    public function delete(Request $request) {
        $pedido = Pedido::where('id', $request->id)->delete();
    }

    public function list(Request $request) {
        try {
            if (isset($request->produto_id)) {
                $produto = Produto::where('id', $request->produto_id)->get()->first();
                return response()->json([
                    'data' => $produto
                ], 200);
            } else {
                $produto = Produto::get();
                return response()->json([
                    'data' => $cliente
                ], 200);
            }

        } catch(Exception e) {

        }

    }


    
}
