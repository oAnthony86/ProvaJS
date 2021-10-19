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
        $transportadora = Transportadora::store([
            'CNPJ' => $request->cnpj,
            'Descricao' => $request->descricao,
            'Cidade' => $request->cidade,
            'Estado' => $request->estado
        ]);
    }

    public function update(Request $request)
    {
        $transportadora = Transportadora::where('id', $request->id)->update([
            'CNPJ' => $request->cnpj,
            'Descricao' => $request->descricao,
            'Cidade' => $request->cidade,
            'Estado' => $request->estado
        ]);
    }

    public function delete(Request $request)
    {
        $transportadora = Transportadora::where('id', $request->id)->delete();
    }

    public function list(Request $request)
    {
        try {
            if (isset($request->id)) {
                $transportadora = Transportadora::where('id', $request->id)->get()->first();
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
