<?php

namespace App\Http\Controllers;
use App\Models\Pedido;
use Illuminate\Http\Request;
use Exception;

class ControllerPedido extends Controller
{
    public function __construct() {

    }

    // public function index() {
    //     return view('')
    // }

    public function store(Request $request) {
        try{
            $pedido = Pedido::create([
                'ClienteId' => $request->ClienteId,
                'TransportadoraId' => $request->TransportadoraId,
                'DataEmissao' => $request->DataEmissao,
                'DataEntrega' => $request->DataEntrega,
                'ValorTotal' => $request->ValorTotal
            ]);
            return response()->json([
                'data' => $pedido
            ],200);
        }catch (Exception $e) {
            return response()->json([
                'message' => "Falha no cadastro de pedido",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function update(Request $request) {
        try{
            $pedido = Pedido::where('id', $request->id)->update([
                'datanascimento' => $request->datanascimento,
                'DataEmissao' => $request->DataEmissao,
                'DataEntrega' => $request->DataEntrega,
                'ValorTotal' => $request->ValorTotal
            ]);
            return response()->json([
                'data' => $pedido
            ],200);
        }catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao atualizar pedido",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function delete(Request $request) {
        try{
            $pedido = Pedido::where('id', $request->id)->delete();
            return response()->json([
                'data' => $pedido
            ],200);
        }catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao deletar pedido",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function list(Request $request) {
        try {
            if (isset($request->pedido_id)) {
                $pedido = Pedido::where('id', $request->produto_id)->get()->first();
                return response()->json([
                    'data' => $pedido
                ], 200);
            } else {
                $pedidos = Pedido::get();
                return response()->json([
                    'data' => $pedidos
                ], 200);
            }

        } catch(Exception $e) {
            return response()->json([
                'message' => "Falha ao buscar lista de Pedidos",
                'error' => $e->getMessage()
            ], 400);
        }

    }


    
}
