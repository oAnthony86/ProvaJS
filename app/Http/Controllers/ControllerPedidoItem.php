<?php

namespace App\Http\Controllers;
use App\Models\PedidoItem;
use Illuminate\Http\Request;
use Exception;

class ControllerPedidoItem extends Controller
{
    public function __construct() {

    }

    public function store(Request $request) {
        try{
            $pedidoitem = PedidoItem::create([
                'ProdutoId'     => $request->produtoId,
                'PedidoId'      => $request->pedidoId,
                'Quantidade'    => $request->quantidade,
                'ValorUnitario' => $request->valorUnitario
            ]);
            return response()->json([
                'data' => $pedidoitem
            ],200);
        }catch (Exception $e) {
            return response()->json([
                'message' => "Falha no cadastro de item do pedido",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function update(Request $request) {
        try {
            $pedidoitem = PedidoItem::where('id', $request->id)->update([
                'NomeCompleto'   => $request->nomeCompleto,
                'CPF'            => $request->cpf,
                'DataNascimento' => $request->dataNascimento,
                'Sexo'           => $request->sexo,
                'Cidade'         => $request->cidade,
                'Estado'         => $request->estado
            ]); 
            return response()->json([
                'data' => $pedidoitem
            ],200);
        }catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao atualizar item do pedido",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function delete(Request $request) {
        try{
            $pedidoitem =PedidoItem::where('id', $request->id)->delete();
            return response()->json([
                'data' => $pedidoitem
            ],200);
        }catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao deletar item do pedido",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function list(Request $request) {
        try {
            if (isset($request->id)) {
                $pedidoitem = PedidoItem::where('id', $request->id)->get()->first();
                return response()->json([
                    'data' => $pedidoitem
                ], 200);
            } else {
                $pedidoitens = PedidoItem::get();
                return response()->json([
                    'data' => $pedidoitens
                ], 200);
            }

        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao buscar lista de item do pedido",
                'error' => $e->getMessage()
            ], 400);
        }

    }



}
