<?php

namespace App\Http\Controllers;
use App\Models\Cliente;
use Illuminate\Http\Request;
use Exception;

class ControllerCliente extends Controller
{
    public function __construct() {

    }

    public function store(Request $request) {
        $cliente = Cliente::store([
            'NomeCompleto' => $request->nomeCompleto,
            'CPF' => $request->cpf,
            'DataNascimento' => $request->dataNascimento,
            'Sexo' => $request->sexo,
            'Cidade' => $request->cidade,
            'Estado' => $request->estado
        ]);
    }

    public function update(Request $request) {
        $clientes = Cliente::where('id', $request->id)->update([
            'NomeCompleto' => $request->nomeCompleto,
            'CPF' => $request->cpf,
            'DataNascimento' => $request->dataNascimento,
            'Sexo' => $request->sexo,
            'Cidade' => $request->cidade,
            'Estado' => $request->estado
        ]);
    }

    public function delete(Request $request) {
        $cliente =Cliente::where('id', $request->id)->delete();
    }

    public function list(Request $request) {
        try {
            if (isset($request->id)) {
                $cliente = Cliente::where('id', $request->id)->get()->first();
                return response()->json([
                    'data' => $cliente
                ], 200);
            } else {
                $clientes = Cliente::get();
                return response()->json([
                    'data' => $clientes
                ], 200);
            }

        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao buscar lista de clientes",
                'error' => $e->getMessage()
            ], 400);
        }

    }



}
