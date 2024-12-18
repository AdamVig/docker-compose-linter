export default {
  branches: ['main', { name: 'beta', prerelease: true, channel: 'beta' }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogTitle:
          '# Changelog' +
          '\n\n> This file was generated automatically using [@semantic-release](https://github.com/semantic-release/semantic-release).',
      },
    ],
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'npm run markdownlint:fix-changelog || true',
      },
    ],
    [
      '@semantic-release/exec',
      {
        // eslint-disable-next-line no-template-curly-in-string
        verifyReleaseCmd: 'echo ${nextRelease.version} > .VERSION',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        // eslint-disable-next-line no-template-curly-in-string
        message: 'release: ${nextRelease.version} [skip ci]',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'README.md',
            label: 'Documentation',
          },
          {
            path: 'CHANGELOG.md',
            label: 'Changelog',
          },
          {
            path: 'sea/dclint-alpine-amd64',
            label: 'DClint Alpine Linux Binary (amd64)',
          },
          {
            path: 'sea/dclint-bullseye-amd64',
            label: 'DClint Bullseye Linux Binary (amd64)',
          },
          {
            path: 'sea/dclint-alpine-arm64',
            label: 'DClint Alpine Linux Binary (arm64)',
          },
          {
            path: 'sea/dclint-bullseye-arm64',
            label: 'DClint Bullseye Linux Binary (arm64)',
          },
        ],
      },
    ],
  ],
  preset: 'conventionalcommits',
  presetConfig: {
    types: [
      {
        type: 'build',
        section: 'Build System',
      },
      {
        type: 'chore',
        section: 'Others',
      },
      {
        type: 'ci',
        section: 'CI/CD',
      },
      {
        type: 'deps',
        section: 'Dependencies',
      },
      {
        type: 'docs',
        section: 'Documentation',
      },
      {
        type: 'feat',
        section: 'Features',
      },
      {
        type: 'fix',
        section: 'Bug Fixes',
      },
      {
        type: 'perf',
        section: 'Performance Improvements',
      },
      {
        type: 'refactor',
        section: 'Code Refactoring',
      },
      {
        type: 'revert',
        section: 'Reverts',
      },
      {
        type: 'style',
        section: 'Styling',
      },
      {
        type: 'test',
        section: 'Tests',
      },
    ],
    releaseRules: [
      {
        type: 'ci',
        release: false,
      },
      {
        type: 'style',
        release: false,
      },
      {
        type: 'test',
        release: false,
      },
    ],
    userUrlFormat: 'https://github.com/{{user}}',
  },
};
