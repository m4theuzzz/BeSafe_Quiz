const hasTable = (tableName) => {
    const table = window.localStorage.getItem(tableName);

    if (!table || table == 'undefined') {
        return false;
    }

    return true;
};

const createTable = (tableName) => {
    if (!hasTable(tableName)) {
        window.localStorage.setItem(tableName, '[]');
    }
};

const getNextRowId = (tableName) => {
    if (!hasTable(tableName)) {
        throw "Esta Tabela não existe"
    }

    const table = JSON.parse(window.localStorage.getItem(tableName));

    return table.length == 0 ? 1 : table[table.length - 1].id + 1;
};

const getTable = (tableName) => {
    if (!hasTable(tableName)) {
        throw "Esta tabela não Existe"
    }

    return JSON.parse(window.localStorage.getItem(tableName));
};

const getByid = (tableName, id) => {
    if (!hasTable(tableName)) {
        throw "Esta tabela não Existe"
    }

    const table = JSON.parse(window.localStorage.getItem(tableName));

    let wantedItem = null;
    for (const item of table) {
        if (item.id == id) {
            wantedItem = item;
            break;
        }
    }

    if (!wantedItem) {
        return "Não existe objeto com este id";
    }

    return wantedItem;
}

const insertIntoTable = (tableName, object) => {
    if (!hasTable(tableName)) {
        throw "Esta tabela não Existe"
    }

    const table = JSON.parse(window.localStorage.getItem(tableName));

    if (typeof object === 'object') {
        object["id"] = getNextRowId(tableName);
    }

    table.push(object);

    try {
        window.localStorage.setItem(tableName, JSON.stringify(table));
        return "Objeto inserido na tabela com sucesso";
    } catch (error) {
        throw error;
    }
};

const updateIntoTable = (tableName, object) => {
    if (!hasTable(tableName)) {
        throw "Esta tabela não Existe"
    }

    let table = JSON.parse(window.localStorage.getItem(tableName));

    table = table.map(item => {
        if (item.id != object.id) {
            return item;
        }
        return object;
    });

    try {
        window.localStorage.setItem(tableName, JSON.stringify(table));
        return "Objeto atualizado com sucesso";
    } catch (error) {
        throw error;
    }
};

const deleteFromTable = (tableName, object) => {
    if (!hasTable(tableName)) {
        throw "Esta tabela não Existe"
    }

    let table = JSON.parse(window.localStorage.getItem(tableName));

    for (let i = table.length - 1; i >= 0; i--) {
        console.log(table[i]);
        if (table[i].id == object.id) {
            table.splice(i, 1);
        }
    }

    try {
        window.localStorage.setItem(tableName, JSON.stringify(table));
        return `Objeto de id: ${object.id} removido da tabela: ${tableName}, com sucesso.`;
    } catch (error) {
        throw error;
    }
};