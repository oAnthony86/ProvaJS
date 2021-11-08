<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Log;

class ControllerCliente extends Controller
{
    public function __construct()
    {
    }

    public function store(Request $request)
    {
        try {
            $cliente = Cliente::create([
                'NomeCompleto'   => $request->nomeCompleto,
                'CPF'            => $request->cpf,
                'DataNascimento' => $request->dataNascimento,
                'Sexo'           => $request->sexo,
                'Cidade'         => $request->cidade,
                'Estado'         => $request->estado
            ]);
            return response()->json([
                'data' => $cliente
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha no cadastro de cliente",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function update(Request $request)
    {
        try {
            $cliente = Cliente::where('id', $request->id)->update([
                'NomeCompleto'   => $request->nomeCompleto,
                'CPF'            => $request->cpf,
                'DataNascimento' => $request->dataNascimento,
                'Sexo'           => $request->sexo,
                'Cidade'         => $request->cidade,
                'Estado'         => $request->estado
            ]);
            return response()->json([
                'data' => $cliente
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao atualizar cliente",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function delete($id)
    {
        try {
            $cliente = Cliente::where('id', $id)->delete();
            return response()->json([
                'data' => $cliente
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => "Falha ao deletar cliente",
                'error'   => $e->getMessage()
            ], 400);
        }
    }

    public function list($id = null)
    {
        try {
            if ($id != null) {
                $cliente = Cliente::where('id', $id)->get()->first();
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
