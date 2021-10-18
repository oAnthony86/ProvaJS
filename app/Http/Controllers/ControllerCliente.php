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
        $clientes = Cliente::store([
            'nome' => $request->nome,
        ])
    }

    public function update(Request $request) {
        $clientes = Cliente::where('id', $request->id)->update([
            'nome' => $request->nome,
        ])
    }

    public function delete(Request $request) {
        $clientes =Cliente::where('id', $request->id)->delete();
    }

    public function list(Request $request) {
        try {
            if (isset($request->cliente_id)) {
                $clientes = Cliente::where('id', $request->cliente_id)->get()->first();
                return response()->json([
                    'data' => $clientes
                ], 200);
            } else {
                $clientes = Cliente::get();
                return response()->json([
                    'data' => $clientes
                ], 200);
            }

        } catch(Exception e) {

        }

    }


    
}
