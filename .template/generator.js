const packageVersionMap = new Map([
  ['bowser', '^2.10.0'],
  ['@fullhuman/postcss-purgecss', '3.0.0'],
  ['@fullhuman/vue-cli-plugin-purgecss', '~4.0.3'],
  ['compression-webpack-plugin', '^5.0.1'],
  ['css-minimizer-webpack-plugin', '^1.1.5'],
  ['prerender-spa-plugin', '^3.4.0'],
  ['stylelint', '^13.12.0'],
  ['stylelint-config-recommended-scss', '^4.2.0'],
  ['stylelint-order', '^4.1.0'],
  ['stylelint-scss', '^3.19.0'],
  ['stylelint-webpack-plugin', '^2.1.1'],
  ['vuex', '^3.4.0'],
  ['@vue/cli-plugin-vuex', '~4.5.0'],
  ['@vue/cli-plugin-eslint', '~4.5.0'],
  ['@vue/composition-api', '^1.1.4'],
  ['@vue/eslint-config-standard', '^5.1.2'],
  ['babel-eslint', '^10.1.0'],
  ['eslint', '^6.7.2'],
  ['eslint-plugin-import', '^2.20.2'],
  ['eslint-plugin-node', '^11.1.0'],
  ['eslint-plugin-promise', '^4.2.1'],
  ['eslint-plugin-standard', '^4.0.0'],
  ['eslint-plugin-vue', '^6.2.2'],
  ['lint-staged', '^9.5.0'],
  ['axios', '^0.21.1'],
  ['vue-meta', '^2.4.0'],
  ['lodash', '^4.17.21'],
  ['normalize.css', '^8.0.1']
])

const dependenciesPlugin = [
  'vuex',
  'vue-meta',
  'bowser',
  'axios',
  'lodash',
  'gsap',
  'normalize.css'
]

const installPackages = {
  dependencies: {},
  devDependencies: {}
}

module.exports = (api, options, rootOptions) => {
  // projectName: output folder name
  // projectBaseUrl: base url name
  const projectName = options.branchName.split('/').join('_').toLowerCase()
  const projectBaseUrl = projectName
  const practiceMode = /0{8}.test(options.cid)/

  for (const [packageName] of packageVersionMap.entries()) {
    addPackage(packageName)
  }

  api.extendPackage({
    name: `@104z-kad/${projectName}`,
    version: '0.1.0',
    private: true,
    scripts: {
      serve: 'vue-cli-service serve --port 3000',
      build: 'vue-cli-service build',
      reset: 'rm -rf dist && git clean -df && npm ci',
      lint: 'npm run lint:script && npm run lint:style',
      'lint:script': 'eslint --fix --ext .js,.vue src',
      'lint:style': 'stylelint --cache src/**/*.{vue,scss} --fix'
    },
    ...installPackages,
    gitHooks: {
      'pre-commit': 'lint-staged'
    },
    'lint-staged': {
      '*.vue': [
        'npm run lint',
        'git add'
      ],
      '*.scss': [
        'npm run lint:style',
        'git add'
      ],
      '*.{js,ts}': [
        'npm run lint:script',
        'git add'
      ]
    },
    eslintConfig: {
      root: true,
      extends: [
        './config/lint/.eslintrc.js'
      ]
    },
    eslintIgnore: [
      '.vscode',
      '!.*',
      'node_modules',
      'template',
      'vendor'
    ],
    stylelint: {
      extends: './config/lint/stylelint.config.js',
      ignoreFiles: [
        '.vscode/**',
        'dist/**',
        'node_modules/**'
      ]
    },
    browserslist: [
      '> 1%',
      'last 2 versions',
      'not dead'
    ]
  })

  // 删除 vue-cli 默認的 src 和 public folder
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') ||
        path.startsWith('public/'))
      .forEach(path => delete files[path])
  })

  const dateObj = new Date()
  const date = {
    y: String(dateObj.getFullYear()),
    m: String(dateObj.getMonth() + 1).padStart(2, '0'),
    d: String(dateObj.getDate()).padStart(2, '0')
  }

  // 根據自定義模板生成項目結構
  api.render('./template', {
    projectName,
    projectBaseUrl,
    currentDate: `${date.y}-${date.m}-${date.d}`,
    practiceMode
  })
}

function addPackage (packageName) {
  if (dependenciesPlugin.includes(packageName)) {
    installPackages.dependencies[packageName] = packageVersionMap.get(packageName)
  } else {
    installPackages.devDependencies[packageName] = packageVersionMap.get(packageName)
  }
}
