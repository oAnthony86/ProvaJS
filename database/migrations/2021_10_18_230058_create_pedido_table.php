<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedido', function (Blueprint $table) {
            $table->id();

            $table->integer('ClienteId');
            $table->integer('TransportadoraId');
            $table->date('DataEmissao');
            $table->date('DataEntrega');
            $table->decimal('ValorTotal');

            $table->foreign('ClienteId')->references('id')->on('cliente');
            $table->foreign('TransportadoraId')->references('id')->on('transportadora');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedido');
    }
}
