<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use Illuminate\Http\Request;
use Exception;

class ControllerPedido extends Controller
{
    public function __construct()
    {
    }

    public function store(Request $request)
    {
        try {
            $pedido = Pedido::create([
                'ClienteId' => $request->clienteId,
                'TransportadoraId' => $request->transportadoraId,
                'DataEmissao' => $request->dataEmissao,
                'DataEntrega' => $request->dataEntrega,
                'ValorTotal' => $request->valorTotal
            ]);

            return response()->json([
                'data' => $pedido
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha no cadastro de pedido",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function update(Request $request)
    {
        try {
            $pedido = Pedido::where('id', $request->id)->update([
                'ClienteId' => $request->clienteId,
                'TransportadoraId' => $request->transportadoraId,
                'DataEmissao' => $request->dataEmissao,
                'DataEntrega' => $request->dataEntrega,
                'ValorTotal' => $request->valorTotal
            ]);
            return response()->json([
                'data' => $pedido
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao atualizar pedido",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function delete($id)
    {
        try {
            $pedido = Pedido::where('id', $id)->delete();
            return response()->json([
                'data' => $pedido
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao deletar pedido",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function list($id = null)
    {
        try {
            if ($id != null) {
                $pedido = Pedido::where('id', $id)->get()->first();
                return response()->json([
                    'data' => $pedido
                ], 200);
            } else {
                $pedidos = Pedido::get();
                return response()->json([
                    'data' => $pedidos
                ], 200);
            }
        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao buscar lista de Pedidos",
                'error' => $e->getMessage()
            ], 400);
        }
    }
}
