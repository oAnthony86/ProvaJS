<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    public $table = 'pedido';
    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'id',
        'ClienteId',
        'TransportadoraId',
        'DataEmissao',
        'DataEntrega',
        'ValorTotal',
    ];
}
