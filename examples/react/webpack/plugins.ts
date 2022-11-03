import type { WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ESlintWebpackPlugin from 'eslint-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import path from 'path';

export const plugins = (isDev: boolean): WebpackPluginInstance[] => {
  const plugins: WebpackPluginInstance[] = [
    new ESlintWebpackPlugin({
      extensions: ['ts', 'js', 'tsx', 'jsx'],
    }),
    new TsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[id].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
    }),
    new CleanWebpackPlugin(),
  ];

  if (isDev) {
    console.log('isDev', isDev);
    plugins.push(
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
    );
  } else {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'bundle-report.html',
        openAnalyzer: false,
      }),
    );
  }

  return plugins as WebpackPluginInstance[];
};
