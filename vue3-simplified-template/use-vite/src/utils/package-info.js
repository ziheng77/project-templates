import pkg from '../../package.json'

export const getDependencies = () => {
  return {
    dependencies: pkg.dependencies,
    devDependencies: pkg.devDependencies,
    version: pkg.version
  }
} 