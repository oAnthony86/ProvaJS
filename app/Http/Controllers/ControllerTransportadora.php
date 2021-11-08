<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transportadora;
use Exception;

class ControllerTransportadora extends Controller
{
    public function __construct()
    {
    }

    public function store(Request $request)
    {
        try {
            $transportadora = Transportadora::create([
                'CNPJ'      => $request->cnpj,
                'Descricao' => $request->descricao,
                'Cidade'    => $request->cidade,
                'Estado'    => $request->estado
            ]);
            return response()->json([
                'data' => $transportadora
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha no cadastro de transportadora",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function update(Request $request)
    {
        try {
            $transportadora = Transportadora::where('id', $request->id)->update([
                'CNPJ'      => $request->cnpj,
                'Descricao' => $request->descricao,
                'Cidade'    => $request->cidade,
                'Estado'    => $request->estado
            ]);
            return response()->json([
                'data' => $transportadora
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha na atualização de transportadora",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function delete($id)
    {
        try {
            $transportadora = Transportadora::where('id', $id)->delete();
            return response()->json([
                'data' => $transportadora
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao deletar transportadora",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function list($id = null)
    {
        try {
            if ($id != null) {
                $transportadora = Transportadora::where('id', $id)->get()->first();
                return response()->json([
                    'data' => $transportadora
                ], 200);
            } else {
                $transportadoras = Transportadora::get();
                return response()->json([
                    'data' => $transportadoras
                ], 200);
            }
        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao buscar lista de transportadoras"
            ], 400);
        }
    }
}
