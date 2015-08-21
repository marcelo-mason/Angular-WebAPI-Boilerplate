using System;
using System.IO;

namespace AngularApp.Common
{
    public static class AppInfo
    {
        public static string LocalPath => new Uri(Path.GetDirectoryName(typeof (AppInfo).Assembly.CodeBase) ?? "").LocalPath;
    }
}