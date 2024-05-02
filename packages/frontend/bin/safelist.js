#!/usr/bin/env node
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const fs = require('fs')
const path = require('path')

const safelistFilePath = '../safelist-definition.js'
const userTailwindConfigPath = path.join(process.cwd(), 'tailwind.config.js')

try {
    // Lendo o conteúdo do arquivo da safelist
    const safelist = fs.readFileSync(safelistFilePath, 'utf-8').trim()

    // Lendo o conteúdo do arquivo tailwind.config.js do projeto do usuário
    let userTailwindConfig = fs.readFileSync(userTailwindConfigPath, 'utf-8')

    // Adicionando a safelist ao arquivo tailwind.config.js do projeto do usuário
    userTailwindConfig = userTailwindConfig.replace(
        /module\.exports\s*=\s*{/,
        `$&\n  safelist: [\n    ${safelist}\n  ],`
    )

    // Escrevendo o arquivo tailwind.config.js atualizado
    fs.writeFileSync(userTailwindConfigPath, userTailwindConfig)

    console.log('Safelist adicionada com sucesso ao arquivo tailwind.config.js do projeto do usuário!')
} catch (error) {
    console.error('Erro ao adicionar a safelist:', error)
}
