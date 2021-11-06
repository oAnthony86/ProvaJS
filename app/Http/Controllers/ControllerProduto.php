<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produto;
use Exception;

class ControllerProduto extends Controller
{
    public function __construct()
    {
    }

    public function store(Request $request)
    {
        try{
            $produto = Produto::store([
                'CodigoBarra' => $request->codigoBarra,
                'Descricao' => $request->descricao,
                'Preco' => $request->preco
            ]);
            return response()->json([
                'data' => $produto
            ],200);
        }catch (Exception $e) {
            return response()->json([
                'message' => "Falha no cadastro de produto",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function update(Request $request)
    {
        try{
            $produto = Produto::where('id', $request->id)->update([
                'CodigoBarra' => $request->codigoBarra,
                'Descricao' => $request->descricao,
                'Preco' => $request->preco
            ]);
            return response()->json([
                'data' => $produto
            ],200);
        }catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao atualizar produto",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function delete(Request $request)
    {
        try{
            $produto = Produto::where('id', $request->id)->delete();
            return response()->json([
                'data' => $produto
            ],200);
        }catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao deletar produto",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function list(Request $request)
    {
        try {
            if (isset($request->id)) {
                $produto = Produto::where('id', $request->id)->get()->first();
                return response()->json([
                    'data' => $produto
                ], 200);
            } else {
                $produtos = Produto::get();
                return response()->json([
                    'data' => $produtos
                ], 200);
            }
        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao buscar lista de produtos"
            ], 400);
        }
    }
}
