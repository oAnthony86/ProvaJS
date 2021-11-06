<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidoItemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedido_item', function (Blueprint $table) {
            $table->id();

            $table->integer('ProdutoId');
            $table->integer('PedidoId');
            $table->integer('Quantidade');
            $table->decimal('ValorUnitario');

            $table->foreign('ProdutoId')->references('id')->on('produto');
            $table->foreign('PedidoId')->references('id')->on('pedido');

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
        Schema::dropIfExists('pedido_item');
    }
}
