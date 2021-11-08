<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use App\Models\PedidoItem;
use App\Models\Produto;
use App\Models\Cliente;
use App\Models\Transportadora;
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

            if (isset($request->pedidoItem)) {
                foreach ($request->pedidoItem as $pedItem) {
                    $pedidoItem = PedidoItem::create([
                        'ProdutoId' => $pedItem->produtoId,
                        'PedidoId' => $pedido->id,
                        'Quantidade' => $pedItem->quantidade,
                        'ValorUnitario' => $pedItem->valorUnitario
                    ]);
                }
            }

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

            PedidoItem::where('PedidoId', $request->id)->delete();
            if (isset($request->pedidoItem) && !empty($request->pedidoItem)) {
                foreach ($request->pedidoItem as $pedItem) {
                    $pedidoItem = PedidoItem::create([
                        'ProdutoId' => $pedItem->produtoId,
                        'PedidoId' => $request->id,
                        'Quantidade' => $pedItem->quantidade,
                        'ValorUnitario' => $pedItem->valorUnitario
                    ]);
                }
            }

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
            PedidoItem::where('PedidoId', $id)->delete();
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

                $pedido->cliente = Cliente::where('id', $pedido->ClienteId)->get()->first();
                $pedido->transportadora = Transportadora::where('id', $pedido->TransportadoraId)->get()->first();

                $pedidoItens = PedidoItem::where('PedidoId', $pedido->id)->get();
                foreach ($pedidoItens as $pedItem) {
                    $pedItem->produto = Produto::where('id', $pedItem->ProdutoId)->get();
                }

                $pedido->pedidoItem = $pedidoItens;

                return response()->json([
                    'data' => $pedido
                ], 200);
            } else {
                $pedidos = Pedido::get();

                foreach ($pedidos as $ped) {
                    $ped->cliente = Cliente::where('id', $ped->ClienteId)->get()->first();
                    $ped->transportadora = Transportadora::where('id', $ped->TransportadoraId)->get()->first();

                    $pedidoItens = PedidoItem::where('PedidoId', $ped->id)->get();
                    foreach ($pedidoItens as $pedItem) {
                        $pedItem->produto = Produto::where('id', $pedItem->ProdutoId)->get();
                    }

                    $ped->pedidoItem = $pedidoItens;
                }

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
