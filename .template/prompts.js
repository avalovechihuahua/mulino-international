module.exports = [
  {
    name: 'branchName',
    type: 'input',
    message: '分支名稱, ex: 104/20210601: ',
    validate: input => /^[0-9a-z\-\_]+\/\d{8}/.test(input)
  },
  {
    name: 'jiraIssueKey',
    type: 'input',
    message: 'JIRA單號, ex: ZT-1124: ',
    validate: input => input.startsWith('ZT-')
  },
  {
    name: 'cid',
    type: 'input',
    message: 'Customer ID (custno), ex: 84598349\n如為練習專案請輸入8個0, ex: 00000000: ',
    validate: input => /^\d+$/.test(input)
  },
  {
    name: 'companyName',
    type: 'input',
    message: '表頭客戶公司名稱(optional): '
  },
  {
    name: 'extNumber',
    type: 'input',
    message: '表尾聯絡分機(optional): '
  },
  {
    name: 'contactEmail',
    type: 'input',
    message: '表尾聯絡Email(optional): '
  }
]