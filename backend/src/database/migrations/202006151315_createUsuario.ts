import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('usuarios', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('endereco').notNullable();
        table.date('dataNascimento').notNullable();
        table.date('dataInicioAcademia').notNullable();
        table.string('telefone').notNullable();
        table.string('whatsapp').notNullable();
        table.string('facebook');
        table.string('instagram');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('usuarios');
}
