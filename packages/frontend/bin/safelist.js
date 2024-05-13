#!/usr/bin/env node
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef

const fs = require('fs')
const path = require('path')

try {
    // Caminho para o arquivo da safelist dentro do seu próprio projeto
    const safelistFilePath = path.resolve(__dirname, '../src/safelist-definition.ts')

    // Lendo o conteúdo do arquivo da safelist
    const safelist = fs.readFileSync(safelistFilePath, 'utf-8')

    // Caminho para o arquivo tailwind.config.js do seu projeto
    const yourTailwindConfigPath = path.resolve(process.cwd(), 'tailwind.config.js')

    // Verificando se o arquivo tailwind.config.js existe
    const yourTailwindConfigExists = fs.existsSync(yourTailwindConfigPath)

    if (yourTailwindConfigExists) {
        // Lendo o conteúdo do arquivo tailwind.config.js
        let yourTailwindConfig = fs.readFileSync(yourTailwindConfigPath, 'utf-8')

        // Encontrando o índice do módulo.exports ou export default
        const moduleExportsIndex = yourTailwindConfig.indexOf('module.exports')
        const exportDefaultIndex = yourTailwindConfig.indexOf('export default')

        // Encontrando o índice do último } após o module.exports ou export default
        const lastBraceIndex =
            Math.max(moduleExportsIndex, exportDefaultIndex) +
            yourTailwindConfig.slice(Math.max(moduleExportsIndex, exportDefaultIndex)).lastIndexOf('}')

        // Construindo a nova configuração com a safelist adicionada
        const newTailwindConfig = `${yourTailwindConfig.slice(0, lastBraceIndex) + ','}safelist: ${safelist.slice(23)}${yourTailwindConfig.slice(lastBraceIndex)}`

        // Escrevendo o arquivo tailwind.config.js atualizado
        fs.writeFileSync(yourTailwindConfigPath, newTailwindConfig)

        console.log('Safelist adicionada com sucesso ao arquivo tailwind.config.js do seu projeto!')
    } else {
        throw new Error('Não foi possível encontrar o arquivo tailwind.config.js')
    }
} catch (error) {
    console.error('Erro ao adicionar a safelist:', error)
}
